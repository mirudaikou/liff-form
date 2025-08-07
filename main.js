const GAS_URL = "https://script.google.com/macros/s/AKfycbzmf3HBbt6NhLmpG4NuDn28eH7-w4JeKb8EraxwkrntHSbVURV0GQ41mskEeyYAflaB9w/exec"; // ← あなたのGASデプロイURL

async function submitForm() {
  const data = {
    taskName: document.getElementById("taskName").value,
    member: document.getElementById("member").value,
    step: document.getElementById("step").value,
    point: document.getElementById("point").value,
    note: document.getElementById("note").value
  };

  try {
    await liff.init({ liffId: "2007865517-N5Ox6P07" }); // ← 必ず自分のLIFF IDに書き換えてね

    const res = await fetch(GAS_URL, {
      method: "POST",
      body: JSON.stringify(data)
    });

    const text = await res.text();
    alert("送信結果: " + text);

  } catch (err) {
    alert("送信失敗: " + err);
  }
}
