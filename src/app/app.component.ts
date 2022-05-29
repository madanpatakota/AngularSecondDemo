import { Component, ɵCompiler_compileModuleSync__POST_R3__ } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  OrderID = "Ord123"

  //a:number = 1;


  EvtShowModel(showtext: string) {
    alert(showtext);

  }

  CityName = "BanGlOre";
  CityName1 = "BanGlOre";
  CityName2 = "BanGlore"

  inputType = "text";

  evtKeyup(OrderCity: HTMLInputElement,eventDetails:any) {  //html elemnt
    
    //eventDetails is a keyboardeventobject
    //this object contains the key property
    //key property contains the my value.

    console.log(eventDetails.key);


    //console.log(OrderCity.value);


    this.CityName = OrderCity.value;
    console.log(eventDetails);
    //  if(this.CityName.length>10){
    //    alert("Please do't enter the value");
    //  }

    this.CityName = OrderCity.value;
    if (this.CityName.length > 10) {
      //alert("Please do't enter the value");
      this.CityName = this.CityName.toLowerCase();
      this.inputType = "checkbox";
    }


  }

  evtngmodelChange(OrderCity: any) {  //textbox value
    console.log(OrderCity);
    if (OrderCity.length > 10) {
      this.CityName1 = OrderCity.toLowerCase();
      this.inputType = "checkbox";
    }
    if (OrderCity == "Hyderabad" || OrderCity == "Chennai") {
      alert("Please do't enter the " + OrderCity);
    }
  }

}
