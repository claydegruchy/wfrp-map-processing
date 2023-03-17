# plan
- convert image to black and white
- send to google ocr
iterate over objects in result
    remove brackets
    check if number
        if number, this is a coord of a POI
        else discard
get .text
    split by \n
    remove brackets
    if text prefixed by number, this is the label of a POI
marry pois and labels
get middle positions of points of interest
    get corder extents of map one translated
    apply translation to pois in relation to 
