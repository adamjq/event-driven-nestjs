# Event-Driven NestJS

Example NestJS app running on AWS Lambda with EventBridge. The use case is a simple email service
that responds to payment events to and emails customers. The service uses Twilio Sendgrid as an email delivery service.

## AWS Lambda

This project uses [NestJS Standalone applications](https://docs.nestjs.com/standalone-applications) with AWS Lambda.
NestJS Standalone apps let you use the DI system and code organisation of NestJS without starting an entire webserver.

## Setup

1. Create a [SendGrid account](https://sendgrid.com/)

2. Get a [Sendgrid API key](https://docs.sendgrid.com/ui/account-and-settings/api-keys)

3. Add your Sendgrid API key to the AWS SSM with the prefix `/dev/sendgrid/apiKey` using the Secure String type.

4. [Verify an email domain with Sendgrid](https://docs.sendgrid.com/ui/account-and-settings/how-to-set-up-domain-authentication)

5. Update the `.serverless.yml` file with your verified email domain.

## AWS Deployment

```
export AWS_PROFILE=<YOUR_PROFILE>

npx serverless deploy --stage dev
```

## Events

The service reacts to one event: `payments.InvoicePaid`

The pattern used is [Event-Carried State Transfer](https://martinfowler.com/articles/201701-event-driven.html) to pass around the relevant information about the User needed to send the email.

Example:
```json
{
    "version": "0",
    "id": "c82f1e7d-4b0b-9d75-3f11-89be92935a12",
    "detail-type": "payments.InvoicePaid",
    "source": "payments.api",
    "account": "111111111111",
    "time": "2022-12-04T11:22:08Z",
    "region": "us-east-1",
    "resources": [],
    "detail": {
        "user": {
            "id": 1,
            "email": "user@gmail.com"
        }
    }
}
```
