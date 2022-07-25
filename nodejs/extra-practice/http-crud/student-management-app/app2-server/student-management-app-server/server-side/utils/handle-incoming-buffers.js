async function handleIncomingBuffers(request) {
  const buffers = [];
  for await (const chunk of request) {
    buffers.push(chunk);
  }

  const studentData = JSON.parse(Buffer.concat(buffers).toString());
  
  return numberize(studentData);
}

function numberize(dataObj) {
  for (const key in dataObj) {
    if (dataObj[key] && key !== 'name') {
      dataObj[key] = parseFloat(dataObj[key]);
    }
  }
  return dataObj;
}

module.exports = handleIncomingBuffers;
