export interface IMailSender {
  send(mailConfig: MailConfig): void;
}
type MailConfig = {
  from: string;
  to: string | string[];
  subject: string;
  html: string;
};
