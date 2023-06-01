const { Kafka } = require('kafkajs')

const kafka = new Kafka({
  clientId: 'learning-kafka',
  brokers: ['localhost:29092']
})

const producer = kafka.producer()


const run = async () => {
  // Producing
  await producer.connect()
  await producer.send({
    topic: 'test-topic',
    messages: [
      { value: 'Hello KafkaJS user!' },
    ],
  })
}

run().catch(console.error)