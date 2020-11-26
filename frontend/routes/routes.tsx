import React from "react";
import { Route, Switch } from "react-router-dom";
import Registry from "../components/registry/registry";
import WeeklyAdd from "../components/weeklyAdd/weeklyAdd";
import GiftCards from "../components/giftCards/giftCards";
import Redcard from "../components/redCard/redCard";
import StoreLocator from "../components/storeLocator/storeLocator";
import Orders from "../components/orders/orders";
import Home from "../components/home/home";

export function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/gift-registry" exact component={Registry} />
      <Route path="/weekly-add" exact component={WeeklyAdd} />
      <Route path="/redcard/about" exact component={Redcard} />
      <Route path="/c/gift-cards/-/N-5xsxu" exact component={GiftCards} />
      <Route path="/store-locator/find-stores" exact component={StoreLocator} />
      <Route path="/account/orders" exact component={Orders} />
    </Switch>
  );
}

export default Routes;
