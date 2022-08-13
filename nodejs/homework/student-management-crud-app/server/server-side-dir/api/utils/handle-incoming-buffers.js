async function handleIncomingBuffers(request) {
  console.log("from handle request", request);
  const buffers = [];
  for await (const chunk of request) {
    console.log("chunk", chunk);
    buffers.push(chunk);
    console.log(buffers);
  }

  const studentData = JSON.parse(Buffer.concat(buffers).toString());
  console.log("from handle", studentData);
  return numberize(studentData);
}

function numberize(dataObj) {
  for (const key in dataObj) {
    if (dataObj[key] && key !== "name") {
      dataObj[key] = parseFloat(dataObj[key]);
    }
  }
  return dataObj;
}

module.exports = handleIncomingBuffers;
