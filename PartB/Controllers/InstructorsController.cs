using PartB.Models.Registration;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace PartB.Controllers
{
    public class InstructorsController : JsonController
    {
        private readonly RegistrationvmBuilder _registrationvmBuilder = new RegistrationvmBuilder();
        // GET: Instructor
        public ActionResult Index()
        {
            return Json(_registrationvmBuilder.GetInstructorVms(), JsonRequestBehavior.AllowGet);
        }
    }
}