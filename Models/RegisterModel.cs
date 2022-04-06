using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace InscrieriStudenti.Models
{
    public class RegisterModel
    {
        public string Nume { get; set; }
        public string Prenume { get; set; }
        public string Email { get; set; }
        public string Password { get; set; }
        public string Adresa { get; set; }
        public string Localitate { get; set; }
        public string Tara { get; set; }
        public string CodPostal { get; set; }
        public string Role { get; set; }
    }
}
