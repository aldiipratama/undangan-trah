document.addEventListener("DOMContentLoaded", () => {
  const calendar = new VanillaCalendar("#calender", {
    DOMTemplates: {
      default: `
      <div class="vanilla-calendar-header">
        <#ArrowPrev />
        <div class="vanilla-calendar-header__content">
          <#Month />
          <#Year />
        </div>
        <#ArrowNext />
      </div>
      <div class="vanilla-calendar-wrapper">
        <#WeekNumbers />
        <div class="vanilla-calendar-content">
          <#Week />
          <#Days />
        </div>
      </div>
      <hr class="my-5" />
      <div class="flex flex-col justify-center items-center">
        <p class="text-sm md:text-lg">Kumpul Trah Eyang Riyo Lelono</p>
        <div class="flex justify-center items-center">
            <p class="text-sm md:text-md">Pukul : </p>
            <#ControlTime />
            <span class="text-sm md:text-md">- Selesai</span>
        </div>
      </div>
    `,
    },
    settings: {
      selected: {
        dates: ["2023-12-09"],
        month: 11,
        year: 2023,
        time: "12:00",
      },
      visibility: {
        // theme: "light",
        theme: "light",
      },
      selection: {
        day: false,
        month: false,
        year: false,
        time: 24,
      },
      lang: "id-ID",
    },
    CSSClasses: {
      timeRange: "hidden",
      time: "p-0",
    },
    popups: {
      "2023-12-09": {
        html: "Kumpul Trah Eyang Riyo Lelono,<br/>Pukul :<br/>12.00 - Selesai",
      },
    },
    locale: {
      months: [
        "Januari",
        "Februari",
        "Maret",
        "April",
        "Mei",
        "Juni",
        "Juli",
        "Agustus",
        "September",
        "Oktober",
        "November",
        "Desember",
      ],
      weekday: ["Min", "Sen", "Sel", "Rab", "Kam", "Jum", "Sab"],
    },
  }).init();
});
