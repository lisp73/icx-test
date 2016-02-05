(ns project1.core
     (:require-macros [cljs.core.async.macros :refer [go]])
     (:require [clojure.browser.repl :as repl]
               [cljs-http.client :as http]
               [cljs.core.async :refer [<!]]
               [enfocus.core :as ef]))
(defn ^:export init []
  (repl/connect "http://localhost:9000/repl")
  (go
      (let [response (<!(http/get "/load/show"))]
           (js/alert (:body response)))))
            
           