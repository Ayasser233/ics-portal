import { Routes } from "@angular/router";
import { Home } from "./pages/home/home.component";
import { OurServices } from "./pages/our-services/our-services.component";
import { HowToHire } from "./pages/how-to-hire/how-to-hire.component";
import { Pricing } from "./pages/pricing/pricing.component";
import { ScreeningTraining } from "./pages/screening-training/screening-training.component";
import { AllAroundMaid } from "./pages/our-services/all-around-maid/all-around-maid.component";
import { PartTimeDomestic } from "./pages/our-services/part-time-domestic/part-time-domestic.component";
import { Driver } from "./pages/our-services/driver/driver.component";
import { Cook } from "./pages/our-services/cook/cook.component";
import { Babysitter } from "./pages/our-services/babysitter/babysitter.component";

export const corporateRoutes: Routes = [
  { path: "", component: Home },
  { path: "our-services", component: OurServices },
  { path: "our-services/full-time-domestic", component: AllAroundMaid },
  { path: "our-services/part-time-domestic", component: PartTimeDomestic },
  { path: "our-services/cook", component: Cook },
  { path: "our-services/driver", component: Driver },
  { path: "our-services/babysitter", component: Babysitter },
  { path: "how-to-hire", component: HowToHire },
  { path: "pricing", component: Pricing },
  { path: "screening-training", component: ScreeningTraining },

];
