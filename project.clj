 (defproject project1 "0.1.0-SNAPSHOT"
  :description "FIXME: write description"
  :url "http://example.com/FIXME"
  :min-lein-version "2.0.0"
  :dependencies [[org.clojure/clojure "1.7.0"]
                 [compojure "1.4.0"]
                 [ring/ring-defaults "0.1.5"]
                 [ring/ring-json "0.4.0"]
                 [org.clojure/clojurescript"1.7.228"]
                 [org.clojure/data.json "0.2.6"]
                 [org.clojure/data.csv "0.1.3"]
                 [csv-to-json "0.1.2-SNAPSHOT"]
                 [cljs-http "0.1.39"]
                 [org.clojure/core.async "0.2.374"]
                 [enfocus "2.1.1"]]
  :plugins [[lein-ring "0.9.7"]
            [lein-cljsbuild "1.1.2"]]
  :ring {:handler project1.handler/app}
  :profiles
  {:dev {:dependencies [[javax.servlet/servlet-api "2.5"]
                        [ring/ring-mock "0.3.0"]]}}
   :cljsbuild {
               :builds [{
                         :source-paths ["src-cljs"]
                         :compiler {
                                    :output-to "resources/public/main.js"
                                    :optimizations :whitespace
                                    :pretty-print true}}]})
                    
