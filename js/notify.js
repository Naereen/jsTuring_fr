/*
 * Fonction javascript basique pour envoyer une notification
 * Par Lilian Besson - https://github.com/Naereen/jsTuring_fr
 */
var notificationEvents = ['onclick', 'onshow', 'onerror', 'onclose'];

function notifyUser(body) {
   if ('Notification' in window) {
      var title;
      var options;

      title = "Simulateur de Machines de Turing";
      options = {
         body:  body,
         tag:  'preset',
         icon: 'favicon.png'
      };

      Notification.requestPermission(function() {
         var notification = new Notification(title, options);

         notificationEvents.forEach(function(eventName) {
            notification[eventName] = function(event) {
               console.log("WebNotification-API: notification sent, with title ='", title, "' and body ='", body, "' ...");
            };
         });
      });
   }
   else {
      console.log("WebNotification-API: API not available... body ='", body, "'...");
   }
}
