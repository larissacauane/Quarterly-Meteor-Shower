import meteor_shower from "./data/data.js"

function meteor_shower_peak(month, month_peak) {

    switch(month) {

        case "Jan":
            month_peak = "January";
            break;
        case "Feb":
            month_peak = "February";
            break;
        case "Mar":
            month_peak = "March";
            break;
        case "Apr":
            month_peak = "April";
            break;
        case "May":
            month_peak = "May";
            break;
        case "Jun":
            month_peak = "June";
            break;
        case "Jul":
            month_peak = "July";
            break;
        case "Aug":
            month_peak = "August";
            break;
        case "Sep":
            month_peak = "September";
            break;
        case "Oct":
            month_peak = "October";
            break;
        case "Nov":
            month_peak =  "November";
            break;
        case "Dec":
            month_peak = "December";
            break;
        default:
            month_peak = "Invalid Month"
            break;

    }
}

function meteor() {

    for(const meteor of meteor_shower) {
        
        let name_meteor = meteor.name;
        let peak_meteor = meteor.peak;
        let speed_meteor = meteor.speed;

        let peak_month_day = peak_meteor.split(" ");

        let peak_day = peak_month_day[1];
        let peak_month = peak_month_day[0];

        let peak_month_name = "";

        meteor_shower_peak(peak_month, peak_month_name);
    }

    let peak_date_shower_create = peak_day + " / " + peak_month_name;
    
    let speed_create = speed_meteor.replace("km/s", "kilometers per second");

    console.log("Name: ".padEnd(30, ".") + name_meteor);
    console.log("Peak: ".padEnd(30, ".") + peak_date_shower_create);
    console.log("Speed: ".padEnd(30, ".") + speed_create);
    console.log("\n");

}

export default meteor;

