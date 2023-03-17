file=$1
basename "$file"
n="${file##*/}" 
echo "$n"_EXTRACT.json


# this is probably the best aprox that im goingt to get:
convert $1 -fill black  -fuzz 30% +opaque "#FFFFFF" -threshold 90 "gcp-ocr-prepped/"$n"_PREPPED.png"

# this passes to detect
# gcloud ml vision detect-text converted.png > "gcp-ocr-prepped/"$n"_EXTRACT.png"




# all this is testing land
# convert $1 -fill white -fuzz 10% +opaque "#36322D"  "processing_tools/converted.png"
# ( $1 -fill white +opaque "#36322D" -transparent white )
# convert $1 -fill white -fuzz 30% +opaque "#36322D" "processing_tools/converted.png"
# convert $1 -fill white -fuzz 30% +opaque "#161616" "processing_tools/converted.png"
# convert $1 -fuzz 30% +opaque "#161616" "processing_tools/converted.png"



# convert $1 -fuzz 30% -fill white -opaque white -fill black  "processing_tools/converted.png"
# isolate numbers
# convert $1 -negate -fuzz 20% -threshold 80 -negate  "processing_tools/converted.png"

