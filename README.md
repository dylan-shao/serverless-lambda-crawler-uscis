## What is this?

Crawl USCIS case status and send SMS notification using:

1. [AWS lambda](https://aws.amazon.com/lambda/): Function-as-a-Servcie, crawl the USCIS case status, and trigger the notification

2. [CloudWatch](https://aws.amazon.com/cloudwatch/): Infrastructure management, used to trigger the lambda regularly

3. [Serverless](https://serverless.com/): deploy lambda function

4. [cheerio](https://github.com/cheeriojs/cheerio): parse html and get the target content

5. [Nexmo](https://www.nexmo.com/): sms notification service

### How to use it

1. You need to set up your [AWS](https://aws.amazon.com/) account, and [Serverless](https://serverless.com/) frameowrk, and create a secrets.js file and save the following variables:

   * caseNumber
   * NEXMO_API_KEY (from Nexmo)
   * NEXMO_API_SECRET (from Nexmo)
   * FROM (from Nexmo)
   * MY_PHONE_NUMBER

2. Then you need to [config your Serverless](https://serverless.com/framework/docs/providers/aws/guide/quick-start/), and [**deploy**](https://serverless.com/framework/docs/providers/aws/guide/deploying/) the lambda to your AWS.

3. Set up the crawl intervals using [CloudWatch Events](https://docs.aws.amazon.com/AmazonCloudWatch/latest/events/RunLambdaSchedule.html)
