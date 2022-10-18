aws ecr-public get-login-password --region us-east-1 | docker login --username AWS --password-stdin public.ecr.aws/f2c9u9m9

docker-compose build

docker tag server:latest public.ecr.aws/f2c9u9m9/url-shortener:latest

docker push public.ecr.aws/f2c9u9m9/url-shortener:latest

docker-compose up -d

aws cloudformation deploy \
   --template-file ecs.yml \
   --region ap-southeast-1 \
   --stack-name urlecs \
   --capabilities CAPABILITY_NAMED_IAM

aws cloudformation deploy \
   --template-file service.yml \
   --region ap-southeast-1 \
   --stack-name urlservice \
   --capabilities CAPABILITY_NAMED_IAM