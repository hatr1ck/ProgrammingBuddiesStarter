import React from "react";
import { Route, Switch } from "react-router-dom";
import Registry from "../components/registry/registry";
import WeeklyAd from "../components/weeklyAd/weeklyAd";
import GiftCards from "../components/giftCards/giftCards";
import Redcard from "../components/redCard/redCard";
import StoreLocator from "../components/storeLocator/storeLocator";
import Orders from "../components/orders/orders";
import Home from "../components/home/home";
import Clearence from "../components/clearence/clearence";
import TopDeals from "../components/topDeals/topDeals";
import TargetStyle from "../components/targetStyle/targetStyle";
import TargetCircle from "../components/targetCircle/targetCircle";
import HomeNEW from "../components/homeNEW/homeNEW";
import BeautyNEW from "../components/beautyNEW/beautyNEW";
import MenNEW from "../components/menNEW/menNEW";
import KidsNEW from "../components/kidsNEW/kidsNEW";
import IdeasCozy from "../components/ideasCozy/ideasCozy";

import WomenNEW from "../components/womenNEW/womenNEW";
import NailsMakeup from "../components/nailsMakeup/nailsMakeup";
import TargetFinds from "../components/targetFinds/targetFinds";
import OrderPickup from "../components/orderPickup/orderPickup";
import SameDay from "../components/sameDay/sameDay";
import DriveUp from "../components/driveUp/driveUp";

export function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/gift-registry" exact component={Registry} />
      <Route path="/redcard/about" exact component={Redcard} />
      <Route path="/c/gift-cards/-/N-5xsxu" exact component={GiftCards} />
      <Route path="/store-locator/find-stores" exact component={StoreLocator} />
      <Route path="/account/orders" exact component={Orders} />
      <Route
        path="/redcard/about?lnk=dNav_redcardexclusives"
        exact
        component={Redcard}
      />
      <Route path="/weekly-add" exact component={WeeklyAd} />
      <Route path="/c/clearance" component={Clearence} />
      <Route path="/c/top-deals" component={TopDeals} />
      <Route path="/offers/target-style" exact component={TargetStyle} />
      <Route path="/offers/target-circle" exact component={TargetCircle} />
      <Route path="/finds/BeautyNews" exact component={BeautyNEW} />
      <Route path="/c/new-arrivals/women" exact component={WomenNEW} />
      <Route path="/c/home-new-arrivals" exact component={HomeNEW} />
      <Route path="/c/men-new-arrivals" exact component={MenNEW} />
      <Route path="/c/kids-new-arrivals" exact component={KidsNEW} />
      <Route path="/c/nails-makeup-beauty/" exact component={NailsMakeup} />
      <Route path="/finds/stories/ideas-cozy" exact component={IdeasCozy} />
      <Route path="/target-finds" exact component={TargetFinds} />

      <Route path="/c/order-pickup/" exact component={OrderPickup} />
      <Route path="/c/same-day-delivery" exact component={SameDay} />
      <Route path="/c/drive-up/" exact component={DriveUp} />
    </Switch>
  );
}

export default Routes;
