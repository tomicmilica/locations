export default interface Location {
  id: string;
  createdAt: Date;
  name: string;
  userCount: number;
  description: string;
  views?: number;
}
