## What is this?

Crawl USCIS case status and send SMS notification using [AWS lambda](https://aws.amazon.com/lambda/), [CloudWatch](https://aws.amazon.com/cloudwatch/) & [Serverless](https://serverless.com/) & [Nexmo](https://www.nexmo.com/)

### How to use it

1. You need to set up your [AWS](https://aws.amazon.com/) account, and [Serverless](https://serverless.com/) frameowrk, and create a secrets.js file and save the following variables:

   * caseNumber
   * NEXMO_API_KEY (from Nexmo)
   * NEXMO_API_SECRET (from Nexmo)
   * FROM (from Nexmo)
   * MY_PHONE_NUMBER

2. Then you need to [config your Serverless](https://serverless.com/framework/docs/providers/aws/guide/quick-start/), and [**deploy**](https://serverless.com/framework/docs/providers/aws/guide/deploying/) the lambda to your AWS.

3. Set up the crawl intervals using [CloudWatch Events](https://docs.aws.amazon.com/AmazonCloudWatch/latest/events/RunLambdaSchedule.html)
