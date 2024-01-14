/**
 * Represents people on exec board and project managers.
 */
export interface Person {
  name: string;
  initials: string;
  role?: string;
  photoURL?: string;
  linkedInURL?: string;
}