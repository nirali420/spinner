setInterval(() => {
  let spin = ["\r|    ", "\r/    ", "\r-    ", "\r\\    ", "\r|    "];
  let spinning = 100;
  for (let icon of spin) {
    spinning += 200;
    setTimeout(() => {
      process.stdout.write(icon);
    }, spinning);
  }
}, 900);
