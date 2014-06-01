TaarifaTelerivert
=================

Background
___________

This javascript code makes use of the Telerivet Cloud Script API to receive structured text messages
containing waterpoint information and send that information on to the Taarifa API.

The advantage of Telerivet is that it comes with an Android application, which allows Taarifa to make
use of local phone networks (and numbers) in any country in the world. It also provides support for
shortcodes and digital numbers obtained from Twilio.

Setup
_____

In order to run the code an account on Telerivet is necessary. In order to get an account on Telerivet
navigate to: ::

  https://telerivet.com/register

Once you have registered setup a new automated service (in the services tab). : ::

    First, create a Custom Rule-Based Service
    Then click "Add action", then select "Run JavaScript code".

Once this step is completed simply copy and paste the javascript code into the browser and click save.
The service will now be triggered everytime an incoming textmessage is received.
