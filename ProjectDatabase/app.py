from flask import Flask
from flask_restful import Api, Resource, reqparse
import pandas as pd 

app = Flask(__name__)
api = Api(app)

class Projects(Resource):
    # Method to fetch data from the CSV file, returns as a dictionary
    def get(self):
        data = pd.read_csv('pcode_data.csv')
        data = data.to_dict('records')
        return {'data' : data}, 200 #200 = status code 

    def post(self):
    # Method to write data to the CSV file
        parser = reqparse.RequestParser()
        parser.add_argument('Name', required=True)
        parser.add_argument('PM', required=True)
        parser.add_argument('Date', required=True)
        parser.add_argument('Description', required=True)
        args = parser.parse_args()

        data = pd.read_csv('pcode_data.csv')

        new_data = pd.DataFrame({
            'Name'      : [args['name']],
            'PM'        : [args['age']],
            'Date'      : [args['date']],
            'Description': [args['description']]
        })

        data = data.append(new_data, ignore_index = True)
        data.to_csv('users.csv', index=False)
        return {'data' : new_data.to_dict('records')}, 201

    def delete(self):
    # Method to update data in the CSV file
        parser = reqparse.RequestParser()
        parser.add_argument('Name', required=True)
        args = parser.parse_args()
        data = pd.read_csv('pcode_data.csv')

        data = data[data['name'] != args['name']]

        data.to_csv('pcode_data.csv', index=False)
        return {'message' : 'Record deleted successfully.'}, 200

# Add URL endpoints
api.add_resource(Projects, '/projects')

##@app.route("/") 
##def hello_world():
##    return "<p>Hello, world!</p>"

if __name__ == '__main__':
    app.run()
