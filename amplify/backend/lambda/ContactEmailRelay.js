const AWS = require('aws-sdk');

/**
 * Demonstrates a simple HTTP endpoint using API Gateway. You have full
 * access to the request and response payload, including headers and
 * status code.
 *
 */
exports.handler = async (event, context) => {
    //console.log('Received event:', JSON.stringify(event, null, 2));

    let body;
    let statusCode = '200';
    const headers = {
        'Content-Type': 'application/json',
    };

    try {
        switch (event.httpMethod) {
            // case 'DELETE':
            //     body = await dynamo.delete(JSON.parse(event.body)).promise();
            //     break;
            // case 'GET':
            //     body = await dynamo.scan({ TableName: event.queryStringParameters.TableName }).promise();
            //     break;
            case 'POST':
              const eventData = JSON.parse(event.body);
              const contactName = eventData.contactName;
              const contactEmail = eventData.contactEmail;

              await ses
                .sendEmail({
                  Destination: {
                    ToAddresses: [process.env.SES_EMAIL],
                  },
                  Source: process.env.SES_EMAIL,
                  Message: {
                    Subject: { Data: `Site Contact from ${contactName}` },
                    Body: {
                      Text: { Data: `Name:  ${contactName}.  Email:  ${contactEmail}` },
                    },
                  },
                })
                // .promise()
                //   body = await dynamo.put(JSON.parse(event.body)).promise();
                break;
            // case 'PUT':
            //     body = await dynamo.update(JSON.parse(event.body)).promise();
            //     break;
            default:
                throw new Error(`Unsupported method "${event.httpMethod}"`);
        }
    } catch (err) {
        statusCode = '400';
        body = err.message;
    } finally {
        body = JSON.stringify(body);
    }

    return {
        statusCode,
        body,
        headers,
    };
};

// const aws = require('aws-sdk')
// const ses = new aws.SES()

// exports.handler = async (event) => {
//   for (const streamedItem of event.Records) {
//     if (streamedItem.eventName === 'INSERT') {
//       //pull off items from stream
//       const candidateName = streamedItem.dynamodb.NewImage.name.S
//       const candidateEmail = streamedItem.dynamodb.NewImage.email.S

//       await ses
//           .sendEmail({
//             Destination: {
//               ToAddresses: [process.env.SES_EMAIL],
//             },
//             Source: process.env.SES_EMAIL,
//             Message: {
//               Subject: { Data: 'Candidate Submission' },
//               Body: {
//                 Text: { Data: `My name is ${candidateName}. You can reach me at ${candidateEmail}` },
//               },
//             },
//           })
//           .promise()
//     }
//   }
//   return { status: 'done' }
// }