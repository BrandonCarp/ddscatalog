# In the United States, dates are typically formatted in month-day-year order (MM/DD/YYYY),
# otherwise known as middle-endian order, which is arguably bad design.
#  Dates in that format can’t be easily sorted because the date’s year comes last instead of first. Try sorting,
#   for instance, 2/2/1800, 3/3/1900, and 1/1/2000 chronologically in any program (e.g., a spreadsheet).
#   Dates in that format are also ambiguous. Harvard was founded on September 8, 1636,
#    but 9/8/1636 could also be interpreted as August 9, 1636!

# Fortunately, computers tend to use ISO 8601, an international standard that prescribes that dates
# should be formatted in year-month-day (YYYY-MM-DD) order, no matter the country, formatting years with four digits,
#  months with two digits, and days with two digits, “padding” each with leading zeroes as needed.

# In a file called outdated.py, implement a program that prompts the user for a date, anno Domini, in month-day-year order,
#  formatted like 9/8/1636 or September 8, 1636, wherein the month in the latter might be any of the values in the list below:



# Then output that same date in YYYY-MM-DD format. If the user’s input is not a valid date in either format,
# prompt the user again. Assume that every month has no more than 31 days; no need to validate whether a month has 28, 29, 30,
# or 31 days.

# Recieve input  month-day-year order 6-2-993 | June 2, 1993
# Output in YYYY-MM-DD format , no month has more than 31 days in this

# x, y = s.split("/")
# if "-" in , if "," in .split

months = {
    "January": "01",
    "February": "02",
    "March": "03",
    "April": "04",
    "May": "05",
    "June": "06",
    "July": "07",
    "August": "08",
    "September": "09",
    "October": "10",
    "November": "11",
    "December": "12"
}

def main():
    while True:
        date = input("Enter date: ").strip()

        # Format: M/D/YYYY
        if "/" in date:
            try:
                month, day, year = date.split("/")
                month = int(month)
                day = int(day)
                if 1 <= month <= 12 and 1 <= day <= 31 and len(year) == 4:
                    print(f"{year}-{month:02d}-{day:02d}")
                    break
            except ValueError:
                continue

        # Format: Month D, YYYY
        elif "," in date:
            try:
                month_day, year = date.split(",")
                month_day = month_day.strip()
                year = year.strip()

                month_name, day = month_day.split(" ")
                day = int(day)

                if month_name in months and 1 <= day <= 31 and len(year) == 4:
                    print(f"{year}-{months[month_name]}-{day:02d}")
                    break
            except ValueError:
                continue

if __name__ == "__main__":
    main()
