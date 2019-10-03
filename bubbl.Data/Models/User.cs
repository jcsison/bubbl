using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace bubbl.Data.Models {
    public class User {
        [Required] public int Id { get; set; }
        [Required] [StringLength(30)] public string UserName { get; set; }
        [Required] public string UserNameUpper { get; set; }
        [Required] public string PasswordHash { get; set; }
        [Required] public DateTime CreationDate { get; set; }
        public virtual IEnumerable<Content> Contents { get; set; } // lazy load property's data (loads a collection from the database the first time it's accessed)
    }
}
