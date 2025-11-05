export type ApplicationStatus = "Applied" | "Pending" | "Rejected" | "Offer";

export interface Application {
  id: number;
  company_name: string;
  job_title: string;
  status: ApplicationStatus;
  applied_at: Date;
};

export type NewApplication = Omit<Application, 'id' | 'applied_at'> //postgreSQL creates th 2

export type upDateApplication = Pick<Application, 'status'>
