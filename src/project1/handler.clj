(ns project1.handler
  (:require [compojure.core :refer :all]
            [project1.csv-json :as csv-to-json]
            [compojure.route :as route]
            [ring.middleware.defaults :refer [wrap-defaults site-defaults]]
            [clojure.data.csv :as csv]
            [clojure.data.json :as json]
            [clojure.java.io :as io]
            [ring.util.response :as rr]))

(defroutes app-routes
  (GET "/"[] "Hello World")
  (GET "/load"[] (rr/response (csv-to-json/run%% "data/input.csv" "data/output.json"))"<h1>LOADING...</h1>")
  (GET "/load/show" [](rr/response (java.io.File. "data/output.json")))
  (route/not-found "Not Found"))

(def app
  (-> app-routes
      (wrap-defaults site-defaults)))
