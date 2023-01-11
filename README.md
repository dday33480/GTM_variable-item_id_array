GTM item_id array variable.

This script will access your dataLayer in order to reurn product ids as an array, this avoids the need to create multiple dataLayer variables to obtain the ids per each line item. You will need to add your GTM container ID to the script at __GTM-XXXXXXX__ .

The use of this script is only for a certain dataLayer structure, the DOT notation that is used is:
__ecommerce.items__

The script can be modified to adapt to a different dataLayer structure but this may be complexe for a novice.
