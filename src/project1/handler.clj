(ns project1.handler
  (:require [compojure.core :refer :all]
            [project1.csv-json :as csv-to-json]
            [compojure.route :as route]
            [ring.middleware.defaults :refer [wrap-defaults site-defaults]]
            [clojure.data.csv :as csv]
            [clojure.data.json :as json]
            [clojure.java.io :as io]))

(defroutes app-routes
  (GET "/" [] "Hello World")
  (route/not-found "Not Found"))

(def app
  (wrap-defaults app-routes site-defaults))
