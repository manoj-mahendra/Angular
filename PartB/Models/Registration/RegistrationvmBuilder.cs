using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using PartB.Models.Glossary;
using Newtonsoft.Json;
using Newtonsoft.Json.Serialization;

namespace PartB.Models.Registration
{
    public class RegistrationvmBuilder
    {
        public GlossaryVm[] GetGlossaryVms()
        {
            var glossary = new[]
            {
                new GlossaryVm { ID = 1, Name = "CREA101", Description = "Care of Magical Creatures"},
                new GlossaryVm { ID = 2, Name = "CREA102", Description = "Defence Against the Dark Art"},
                new GlossaryVm { ID = 3, Name = "CREA103", Description = "Transfiguration"},
            };
            return glossary;
        }
    }

}