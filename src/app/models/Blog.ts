export type status = 'For Approval' | 'Approved' | 'Rejected' | 'Draft'
export interface Blog {
  id: number,
  title: string,
  content: string,
  datePosted: Date,
  dateProcessed?: Date,
  status: status,
  remarks?: string,
  author: string,
  approver?: string
}
