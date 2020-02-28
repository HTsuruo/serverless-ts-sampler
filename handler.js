const aws = require('aws-sdk');
const s3 = new aws.S3();
// import Pdf2Image from './pdf2image';

exports.handler.convert_pdf2img = async (event) => {
    console.log(JSON.stringify(event));
    const param = {
        "Bucket": event.Records[0].s3.bucket.name,
        "Key": event.Records[0].s3.object.key
    }
    const url = `https://${param.Bucket}.s3-ap-northeast-1.amazonaws.com/${param.Key}`;
    console.log(url);
    // TODO implement
    const response = {
        statusCode: 200,
        body: JSON.stringify('Hello from Lambda!'),
    };
    return response;
};
