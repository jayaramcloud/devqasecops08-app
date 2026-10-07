# devqasecops08-app

Your classroom web app. Live at **https://devqasecops08.preparingforinterviews.com**

Pushing to the `master` branch redeploys the site automatically (about a minute).

```bash
git clone https://github.com/jayaramcloud/devqasecops08-app.git
cd devqasecops08-app
npm install
npx wrangler dev        # preview locally at http://localhost:8787
# edit src/index.js, then:
git add -A && git commit -m "my change" && git push
```

Full walkthrough: https://github.com/jayaramcloud/hermes-cloudflare-classroom/blob/master/docs/STUDENT-GUIDE.md
