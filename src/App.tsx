import { useState } from 'react'
import ExpenseForm from './components/ExpenseForm'
import ExpenseFilter from './components/ExpenseFilter'
import ExpenseList from './components/ExpenseList'
import expensesData from './expenses'

const App = () => {
  const [expenses, setExpenses] = useState(expensesData)
  const [selectedCategory, setSelectedCategory] = useState('')

  const visibleExpenses = selectedCategory
    ? expenses.filter((expense) => expense.category === selectedCategory)
    : expenses

  return (
    <div>
      <div className='mb-3'>
        <div className='mb-5'>
          <ExpenseForm
            onSubmit={(expense) =>
              setExpenses([
                ...expenses,
                { ...expense, id: expenses.length + 1 }
              ])
            }
          />
        </div>
        <ExpenseFilter
          onSelectCategory={(category) => setSelectedCategory(category)}
        />
      </div>
      <ExpenseList
        expenses={visibleExpenses}
        onDelete={(id) =>
          setExpenses(expenses.filter((expense) => expense.id !== id))
        }
      />
    </div>
  )
}

export default App
