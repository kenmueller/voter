import { App } from '@slack/bolt'

const app = new App({
	token: process.env.SLACK_TOKEN,
	signingSecret: process.env.SLACK_SIGNING_SECRET
})

app.command('/stats', async ({ ack, say, command: { text } }) => {
	await ack()
	await say(text)
})

app.start(process.env.PORT ?? 3000)
