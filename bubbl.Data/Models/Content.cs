using System;

namespace bubbl.Data.Models {
    public class Content {
        public int Id { get; set; }
        public DateTime UploadDate { get; set; }
        public string Type { get; set; }
        public string Location { get; set; }
        public string Description { get; set; }
    }
}
