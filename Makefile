include .env
service := ''

init:
	npm install && cp .env.example .env

crud:
ifeq ($(service), '')
	echo 'please input your service name';
else
	nest g resource $(service) --no-spec && \
	make db service=$(service)
endif

db:
ifeq ($(service), '')
	echo 'please input your service name';
else
	typeorm-model-generator -h $(DB_HOST) -d $(DB_NAME) -p $(DB_PORT) -u $(DB_USER) -x $(DB_PASSWORD) -e mysql -o ./src/$(service)/entities/ --noConfig true --ce pascal --cp camel --case-file none --namingStrategy=./NamingStrategy.js && \
	mv ./src/$(service)/entities/${service}.ts ./src/$(service)/entities/${service}.entity.ts
endif
