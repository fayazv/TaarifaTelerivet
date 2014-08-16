//splits the message into multiple parts, i.e. structured text messages
var parts = content.split(/#/g);

//if the message does not come in two parts send out a new message, otherwise procede to the webhook
if (parts.length != 2) {
  sendReply("Invalid message format!\n" +
            "Kama kituo cha maji hakifanyi kazi!\n" +
            "Please use 'waterpoint_id#status'\n" +
            "Jina la 'kituo_cha_maji#hadhi'");
  return;
}

sendReply("Your report has been recorded!\n" +
          "Asante kwa ujumbe wako!\n" +
          "waterpoint/kituo cha maji: " + parts[0] + "\n" +
          "Status/hadhi: " + parts[1] + "\n");

var data = {
  "service_code": "wps001",
  "attribute": {
    "waterpoint_id": parts[0],
    "status_group": parts[1]
  }
};
var url = "https://iringa.herokuapp.com/api/requests"
// Log to the Telerivert console
console.log("Sending payload:", data, "to", url);
var response = httpClient.request(url, {
  method: "POST",
  data: JSON.stringify(data),
  headers: {
    'Content-Type': 'application/json'
  }
});
// Log to the Telerivert console
console.log("Response from server:", response.content);
