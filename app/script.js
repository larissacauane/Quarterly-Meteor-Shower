function quarterly_meteors () {
    let first_quarter_of_meteors = "Alpha Centaurids starts on 01/03 and ends on 01/05 \nThe Normids range starts on 02/017 and ends on 02/20 \nPi Pupídeos starts on 03/25 and ends on 03/29"

    let second_quarter_of_meteors = "Líridas starts on 05/23 and ends on 05/26 \nEta Aquarius starts on 05/31 and ends on 06/02 \nBootids from June starts on 06/16 and ends on 06/20"

    let third_quarter_of_meteors = "Eta Líridas começa em 19/08 e termina em 22/08\nAlfa Capricornídeos começa em 13/09 e termina em 17/09"

    let fourth_quarter_of_meteors = "Delta Aquáridas do Sul starts on 10/11 and ends on 10/15 \Piscis Austrinids starts on 4/12 and ends on 8/12 \nPerseids starts on 12/27 and ends on 12/31"


    const current_date = new Date()
    const current_month = current_date.getMonth()

    if (current_month == 0 || current_month == 1 || current_month == 2) {
        console.log("First quarter meteor showers are: \n \n" + first_quarter_of_meteors)
    }
    else if (current_month == 3 || current_month == 4 || current_month == 5) {
        console.log("The second quarter meteor showers are: \n \n" + second_quarter_of_meteors)
    }
    else if (current_month == 6 || current_month == 7 || current_month == 8) {
        console.log("Meteor showers for the third quarter are: \n \n" + third_quarter_of_meteors)
    }
    else if (current_month == 9 || current_month == 10 || current_month == 11) {
        console.log("The fourth quarter meteor showers are: \n \n" + fourth_quarter_of_meteors)
    }
    else {
        console.log("No meteor shower in the reported period!")
    }
}

quarterly_meteors()