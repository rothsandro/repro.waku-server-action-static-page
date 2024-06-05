# Repro for Waku Server Action

It works in local development mode:

1. Execute `npm run dev``
2. Open `http://localhost:3000` in your browser
3. Open DevTools
4. Click on the button => Works, value is logged in the console

It doesn't work in production mode:

1. Execute `npm run preview`
2. Open `http://localhost:8080` in your browser
3. Open DevTools
4. Click on the button => Doesn't work, error is logged

```
Cannot process RSC TypeError: actionFn is not a function
```
