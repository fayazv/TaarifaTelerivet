var parts = content.split(/#/g);
  if (parts.length != 2)
  {sendReply("Invalid message format\n."+"kama kituo cha maji hakifanyi kazi\n"+"Please use name#status\n"+"jina la kituo cha maji#not functional");
  return;}
  sendReply("Your report has been recorded!\n" + "Asante kwa ujumbe wako" + "wp/kituo cha maji: " + parts[0] + "\n" + "Num Status/hadhi: " + parts[1] + "\n");
var response = httpClient.request("http://570cd4ea.ngrok.com/api/requests", {
  method: "POST",
  data: JSON.stringify({"service_code": "wps001","attribute": {"waterpoint_id": parts[0], "status": parts[1] }}),
  headers: {'Content-Type': 'application/json'}});
console.log(response.content);
