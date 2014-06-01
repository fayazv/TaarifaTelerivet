var parts = content.split(/#/g);  //splits the message into multiple parts, i.e. structured text messages
  if (parts.length != 2) //if the message does not come in two parts send out a new message, otherwise procede to the webhook
  {sendReply("Invalid message format\n."+"kama kituo cha maji hakifanyi kazi\n"+"Please use name#status\n"+"jina la kituo cha maji#not functional");
  return;} //the "\n" simply ends the current line
  sendReply("Your report has been recorded!\n" + "Asante kwa ujumbe wako" + "wp/kituo cha maji: " + parts[0] + "\n" + "Num Status/hadhi: " + parts[1] + "\n");
var response = httpClient.request("http://570cd4ea.ngrok.com/api/requests", { //information from text gets send to this webaddress
  method: "POST", //information is posted, other methods include get
  data: JSON.stringify({"service_code": "wps001","attribute": {"waterpoint_id": parts[0], "status": parts[1] }}),
  headers: {'Content-Type': 'application/json'}});
console.log(response.content); //logs in the Telerivert console, line not really necessary
