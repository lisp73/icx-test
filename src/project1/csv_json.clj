(ns project1.csv-json
  (require [clojure.string    :as string]
           [clojure.java.io   :as io]
           [clojure.data.csv  :as csv]
           [clojure.data.json :as json]))

(defn extract-key
  [path]
  (string/split path #"\."))

(defn ^long make-num
  [input]
  (cond
    (integer? input) input
    (empty?   input) 0
    (string?  input) (Long/parseLong (clojure.string/trim input))
    :else            0))

;; this is doing what is suppose to do.
(defn mappings-fn
  [config-paths]
  (map #(assoc-in % [:key-path] (extract-key (:key-path %)))
    (map #(update-in % [:col] dec)
      (map #(update-in % [:col] make-num)
        (map #(zipmap [:col :key-path :type] %)
          (map #(string/split % #":")
                (string/split (string/trim config-paths) #",")))))))
              

(def mappings
  (memoize mappings-fn))

 ;;======================================================================================
 
(comment (defn run%
  "Run CSV to JSON transformation"
  [input output]
    (do
      (with-open [rdr (io/reader input)]
        (with-open [wtr (io/writer output :append true)]
          (doseq [line (line-seq rdr)]
            (let [json-map (csv/read-csv line)]
              ;;(.write wtr (str {:something (json/write-str json-map)}"\n"))))))))
               (.write wtr (str  (json/write-str {:admin (nth (nth json-map 0)5)
                                                  :user {:id (nth (nth json-map 0)1)}
                                                  :event {:timestamp(nth (nth json-map 0)3)
                                                          :uuid(nth(nth json-map 0)0)}})"\n")))))))))
                                                        

 

         
(defn run%% [input output]
    (with-open [rdr (io/reader input) wrtr (io/writer output :append true)]
       (doseq [data (next (csv/read-csv rdr))]
         (.write wrtr (str (json/write-str {:id (.trim (nth data 0)) :fname (.trim (nth data 1)) :lname (.trim (nth data 2)) :username (.trim (nth data 3))
                                            :lat (nth data 4) :long (nth data 5) :gender (.trim (nth data 6)) :age (Integer/valueOf (nth data 7))
                                            :likes (Integer/valueOf (nth data 8)) :dislikes (Integer/valueOf (nth data 9)) :retweets (Integer/valueOf (nth data 10)) }))))))
         
