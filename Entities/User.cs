using Microsoft.AspNetCore.Identity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace InscrieriStudenti.Entities
{
    public class User : IdentityUser
    {
        public ICollection<UserRole> UserRoles { get; set; }
        public string Nume { get;  set; }
        public string Prenume { get;  set; }
        public string Email { get; set; }
        public string Password { get; set; }
        public string Adresa { get; set; }
        public string Localitate { get; set; }
        public string Tara { get; set; }
        public int CodPostal { get; set; }
        public string Role { get; set; }
        //public string UserName { get; set; }
    }
}
