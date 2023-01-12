function () { 

  //Get items object from dataLayer
   var items = google_tag_manager['GTM-XXXXXXX'].dataLayer.get('ecommerce').items;
  
   //Empty array to store itemsIds
  var itemIds = [];

  //Iterate over each item in the dataLayer object to get each item_id
  for(i=0; i<items.length; i++) {
  itemIds.push(items[i].item_id);
  } 
  
  return itemIds;
}