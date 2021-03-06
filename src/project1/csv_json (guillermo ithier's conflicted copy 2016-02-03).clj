(ns project1.csv-json
  (require [clojure.string    :as string]
           [clojure.java.io   :as io]
           [clojure.data.csv  :as csv]
           [clojure.data.json :as json]))

(defn extract-key
  [path]
  (string/split path #"\."))

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


(defn run%
  "Run CSV to JSON transformation"
  [input output]
    (do
      (with-open [rdr (io/reader input)]
        (with-open [wtr (io/writer output :append true)]
          (doseq [line (line-seq rdr)]
            (let [json-map (csv/read-csv line)]
              (.write wtr (str (json/write-str json-map) "\n"))))))))
            
            
(defn run%%
  "Run CSV to JSON transformation"
  [input output]
    (do
      (with-open [rdr (io/reader input)]
        (with-open [wtr (io/writer output :append true)]
          (doseq [line (line-seq rdr)]
            (let [json-map (csv/read-csv line)]
              (.write wtr (str (nth 0(json/write-str json-map))"\n"))))))))


(defn run-original%
  "Run CSV to JSON transformation"
  [input output]
    (do
      (with-open [rdr (io/reader input)]
        (with-open [wtr (io/writer output :append true)]
          (doseq [line (line-seq rdr)]
            (let [json-map (csv/read-csv line)]
              (.write wtr (str (json/write-str (json-map) "\n")))))))))
            
            
(comment (defn run-original
  "Run CSV to JSON transformation"
  [input output]
    (do
      (with-open [rdr (io/reader input)]
        (with-open [wtr (io/writer output :append true)]
          (doseq [line (line-seq rdr)]
            (let [json-map (csv/read-csv line)
                  mapped-row (map-row (mappings json-map))]
              (.write wtr (str (json/write-str mapped-row) "\n")))))))))


            




