using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Threading.Tasks;
using lab_final.Models;
using Microsoft.AspNetCore.Mvc;

namespace lab_final.Controllers
{
    public class ContrasenaController : Controller
    {
       
        public IActionResult Index()
        {
            return View();
        }
        [HttpPost]
        public JsonResult setcontra([FromBody] Contrasena contra)
        {
            SqlCommand cmd = new SqlCommand("UPDATE Contrasena SET contrasena =" + contra.contrasena, datos);
            cmd.CommandType = CommandType.Text;
            datos.Open();
            cmd.ExecuteNonQuery();
            datos.Close();
            return Json(1234);
        }
    }
}
